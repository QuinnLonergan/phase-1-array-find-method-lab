//function superbowlWin(record){
    //record.result.find(wins => {
   //     wins === "W"
   // })
 //   return record.year
//}

function superbowlWin(record) {
    const win = (record.find(game => game.result === "W" 
        ))
        if (win){
            return win.year;
        } else return undefined
}

