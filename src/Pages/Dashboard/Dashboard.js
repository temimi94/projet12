// import Components
import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/header'
import SessionsLineChart from '../../Components/SessionsLineChart/SessionsLineChart'
import PerformanceRadarChart from '../../Components/PerformanceRadarChart/PerformanceRadarChart'
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle'
import ScoreRadiaBarChart from '../../Components/ScoreRadiaBarChart/ScoreRadiaBarChart'
import BarChartActivity from '../../Components/Activity/BarChartActivity'
import BoxRigth from '../../Components/BoxRight/BoxRigth'

//import Css
import './dashboard.css'

//import Icons
import caloriesIcon from '../../Images/calories-icon.svg'
import proteinIcon from '../../Images/protein-icon.svg'
import fatIcon from '../../Images/fat-icon.svg'
import carbsIcon from '../../Images/carbs-icon.svg'

// get Data
import GetUsersData from '../../Data/getData'
import {
    GetUsersActivity,
    GetUsersAverageSession,
    GetUsersPerformances,
} from '../../Data/getData'

export default function Dashboard() {
    // GetUsersData includes the user id, user information (first name, last name and age),
    // the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
    const usersData = GetUsersData()

    // GetUsersActivity retrieves a user's activity day by day with kilograms and calories.
    const usersActivity = GetUsersActivity()

    // GetUsersAverageSession retrieves the average sessions of a user per day. The week starts on Monday.
    const usersAverageSession = GetUsersAverageSession()

    // GetUsersPerformances retrieves a user's performance (energy, endurance, etc.).
    const usersPerformances = GetUsersPerformances()

    return (
        <div>
            <Header />
            <Nav />
            <div className="dashboardContent">
                <DashboardTitle firstName={usersData?.userInfos.firstName} />
            </div>
            <div className="dashboard-container">
                <div className="barActivity">
                    <BarChartActivity activity={usersActivity} />
                </div>

                <div className="container-bottom">
                    <div className="session">
                        <SessionsLineChart session={usersAverageSession} />
                    </div>
                    <div className="performance">
                        <PerformanceRadarChart
                            performance={usersPerformances}
                        />
                    </div>
                    <div className="score">
                        <ScoreRadiaBarChart
                            // Backend have 2 differents names for similar data
                            // score check both and multiply them by 100 to have percents on 100
                            score={
                                (usersData?.todayScore || usersData?.score) * 100
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="container-right">
                <BoxRigth
                    image={caloriesIcon}
                    macroCount={usersData?.keyData.calorieCount}
                    type="KCal"
                    macroName="Calories"
                />
                <BoxRigth
                    image={proteinIcon}
                    macroCount={usersData?.keyData.proteinCount}
                    type="g"
                    macroName="Protéines"
                />
                <BoxRigth
                    image={carbsIcon}
                    macroCount={usersData?.keyData.carbohydrateCount}
                    type="g"
                    macroName="Glucides"
                />
                <BoxRigth
                    image={fatIcon}
                    macroCount={usersData?.keyData.lipidCount}
                    type="g"
                    macroName="Lipides"
                />
            </div>
        </div>
    )
}
