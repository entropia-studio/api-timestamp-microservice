
module.exports = {
    
    sendTimestamp (req,res) {
        
        var date_string = req.params.date_string
        
        // date_string is empty, send current unix and utc time
        if (!date_string)
            res.status(200).send(jsonResponse)       
        
        // Cast number string to create a valid date
        if (!/[-\/]/.test(date_string))
          date_string = parseInt(date_string)                    
      
        var date = new Date(date_string)
      
        if (!date){
          jsonResponse = {"error" : "Invalid date"}
        }else{
          jsonResponse = {"unix": date.getTime(),"utc": date.toUTCString()}
        }  
        
        res.status(200).send(jsonResponse)   
    }
}

var date = new Date()

var jsonResponse = {
    "unix": date.getTime(),
    "utc": date.toUTCString()
}