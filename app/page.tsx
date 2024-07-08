
import CustomBarChart from "@/components/dashboard/Chart";
import Stat from "@/components/dashboard/Stat"


export default function Home() {
  const user = { 'name': 'Jie' }
  const goals = [{ 'title': "Read 20 pages of a book", "duration": 12, "completed": 8 }]

  return (
    <main className="flex min-h-screen flex-col p-24 ">
      <h1>Hi {user.name}</h1>
      <div>
        <h4>Your Progress</h4>
        <CustomBarChart />
      </div>
      <div className="flex justify-center gap-4">
        <Stat title="Total goals" content="26" footer="+2" />
        <Stat title="Average time to complete" content="26" footer="-1 day" />
        <Stat title="Current ranking" content="4/56" footer="0" />
      </div>
      <div>
        <h4>Your Goals</h4>
        {goals.map((goal) =>
          <div key={goal.title} className="flex justify-between">
            <div>
              <p>{goal.title}</p>
              <small>{goal.duration - goal.completed} days left · {goal.duration} days</small>
            </div>
            <div>{Math.round((goal.completed / goal.duration) * 100)}%</div>
          </div>)}
      </div>
    </main>
  );
}
