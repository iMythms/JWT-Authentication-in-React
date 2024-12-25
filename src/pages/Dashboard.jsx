
const Dashboard = ({ user }) => {
    return (
        <>
            <h1>Welcome, {user.username}</h1>
            <p>
                This is the dashboard page where you, and only you, can see a dashboard
                of all of your things.
            </p>
            <a href={`tel:+${user.phoneNumber}`}>My phone number {user.phoneNumber}</a>
        </>
    )
}

export default Dashboard