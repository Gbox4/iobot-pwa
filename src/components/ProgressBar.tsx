import { useEffect, useState } from "react";

// reusing the progress bar logic from the last iobot attempt, and keeping this glorious comment i while extremely sleep deprived
export default function ProgressBar() {
    // This is my beautiful "progress bar". If you are not sure if you're understanding the code right, you probably are.
    // It is literally a bar that increments by a random amount every 10 milliseconds.
    // It serves no functional purpose. It does not track the actual progress of the file loading at all.
    // It doesn't even ever complete. If it gets to 95% complete, I programmed it to just hang at 0.95. Forever.
    // But I guaruntee this will get rid of any complaints about app startup or refresh being slow.
    // Never underestimate the psychological power of a moving progress bar.
    //    - Gabe Banks, Tuesday, 2/22/2022 "two's day"

    // Update: I improved it by, instead of halting "progress" at 95%, it just slows to a crawl.
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const incrementer = setTimeout(() => {
            if (progress <= 95){
                setProgress((progress+(Math.random())/4))
            }
            else if (progress < 100) {
                setProgress((progress+(Math.random())/10))
            }
            else {
                setProgress(100)
            }
        }, 10);
        return () => {clearTimeout(incrementer)}
    })

    const containerStyles = {
        height: 6,
        width: 150,
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgba(0, 122, 255, 1)",
        margin: 50
    }
    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: "rgba(0, 122, 255, 1)",
        borderRadius: 'inherit',
        transition: 'width 8ms ease-in-out',
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles} />
        </div>
    );
  };