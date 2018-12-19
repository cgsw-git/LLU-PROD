showDebug = true; 
showMessage = true; 
var inspDate =  inspObj.getInspectionDate().getMonth() + "/" + inspObj.getInspectionDate().getDayOfMonth() + "/" + inspObj.getInspectionDate().getYear();
var inspType = inspObj.getInspectionType();
logDebug("Inspection Date= " + inspDate);

//generate and attach the 5001 Inspection Report to the inspected record
var myResult = aa.cap.getCap(inspObj.getCapID());
if (myResult.getSuccess()){
  cap = myResult.getOutput();
  capId = cap.getCapID();
  logDebugObject(capId);
  logDebug("customID = " + capId.getCustomID());
  runReportAttach(capId,"5001 Inspection Report","departmentID",capId.getCustomID(),"inspectionDate",inspDate,"inspectionType",inspType);
} else {
  logDebug("ERROR: Could not get CapId : " + myResult.getErrorType() + " : " + myResult.getErrorMessage() );
}
// End generate and attach the 5001 Inspection Report to the inspected record

function logDebugObject(myObject) {
/*
usage - logDebugObject(object)

author - Michael Zachry
created - 10/10/2018

updates
10/11/2018 - initial version

*/
  //list the methods
  try {
    logDebug("object is is a " + myObject.getClass());
    logDebug("object has the following methods:");
    for (x in myObject) {
      if (typeof(myObject[x]) == "function" ) {
        logDebug("  " + x);
      }
    }

    //list the properties and values    
    logDebug("object has the following properties and values:");
    for (x in myObject) {
      if (typeof(myObject[x]) != "function" ) {
        logDebug("  " + x + " = " + myObject[x]);
      }
    }
  } catch (err) {
    logDebug("A JavaScript Error occured: " + err.message);
  }
}
