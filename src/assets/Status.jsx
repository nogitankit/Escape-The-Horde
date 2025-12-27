import clsx from "clsx"


export default function Status({isGameOver, isGameLost, isGameWon, message}){

   function renderGameStatus() {

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        else if(isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        else if(message && !isGameOver){
            return (
                <>
                    <p>{message}</p>
                </>
            )
        }
        else if (!isGameOver) {
            return null
        } 
        

    }

    return (
        <section className={clsx(
            'game-status', {
                'won' : isGameWon,
                'lost' : isGameLost,
                'wrong' : message && !isGameOver
            }
        )}>
            {renderGameStatus()}
        </section>
    )
}