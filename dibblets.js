/** This is a sample code for your bot**/
function MessageHandler(context, event) {
    if(event.message == "hi") { 
        context.sendResponse("Hello!"); 
    } 
   if (event.message == "my car wont start") {
        context.sendResponse("okay i will ask you some questions to try and help diagnose the problem, okay?");
    } 
    
    if (event.message == "okay"){
         context.sendResponse("when turning the key car over, does the car make any noise?");
    }
    if (event.message == "no"){
         context.sendResponse("Heres a video that might help! link:https://youtu.be/BrqkhZmDnHQ");
    }
   
}
/** Functions declared below are required **/
function EventHandler(context, event) {
    if(! context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse("Thanks for adding me. You are:" + numinstances);
}

function HttpResponseHandler(context, event) {
    // if(event.geturl === "http://ip-api.com/json")
    context.sendResponse(event.getresp);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}