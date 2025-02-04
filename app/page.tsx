
import { CustomLineChart } from "@/components/dashboard/Chart";
import Stat from "@/components/dashboard/Stat"
import { TypographyH1, TypographyH2 } from "@/components/typography/typography";


export default function Home() {
  const user = { 'name': 'Jie' }
  const goals = [{ 'title': "Read 20 pages of a book", "duration": 12, "completed": 8 }, { 'title': "Touch grass", "duration": 12, "completed": 4 }]

  return (
    <main className="flex min-h-screen flex-col">
      <TypographyH1 text="Hi Jie" />
      <div>
        <TypographyH2 text="Your Progress" />
        <CustomLineChart />
      </div>
      <div className="flex justify-center gap-4">
        <Stat title="Total goals" content="26" footer="+2" />
        <Stat title="Average time to complete" content="26" footer="-1 day" />
        <Stat title="Current ranking" content="4/56" footer="0" />
      </div>
      <div>
        <TypographyH2 text="Your Goals" />
        {goals.map((goal) =>
          <div key={goal.title} className="flex justify-between mt-4">
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
