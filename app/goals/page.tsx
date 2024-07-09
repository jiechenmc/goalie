'use client'

import { TypographyH2 } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const Goals = () => {
    const [goals, setGoals] = useState([{ 'title': "Read 20 pages of a book", "duration": 12, "completed": 8 }, { 'title': "Touch grass", "duration": 12, "completed": 4 }])

    const addNewGoal = () => {
        setGoals([...goals, { 'title': "HOCOUS POCUS", "duration": 12, "completed": 8 }])
    }

    return <div>
        <div>
            <TypographyH2 text="Goals" />
            <Button onClick={addNewGoal}>Create</Button>
            {goals.map((goal) =>
                <div key={goal.title} className="flex justify-between mt-4">
                    <div>
                        <p>{goal.title}</p>
                        <small>{goal.duration - goal.completed} days left · {goal.duration} days</small>
                    </div>
                    <div>{Math.round((goal.completed / goal.duration) * 100)}%</div>
                </div>)}
        </div>
        <div className="mt-4">
            <TypographyH2 text="Discover What Others Are Doing" />
        </div>
    </div>;
}

export default Goals;