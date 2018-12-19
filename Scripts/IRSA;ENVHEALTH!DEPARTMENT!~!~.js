showDebug = true; 
showMessage = true; 
var inspDate =  inspObj.getInspectionDate().getMonth() + "/" + inspObj.getInspectionDate().getDayOfMonth() + "/" + inspObj.getInspectionDate().getYear();
var inspType = inspObj.getInspectionType();
var capId = capId.getCapID();
logDebug("Inspection Date= " + inspDate);

//generate and attach the 5001 Inspection Report to the inspected record
var myResult = aa.cap.getCap(inspObj.getCapID());
if (myResult.getSuccess()){
  cap = myResult.getOutput();
  capId = cap.getCapID();
  runReportAttach(capId,"5001 Inspection Report","departmentID",capId.getCustomID(),"inspectionDate",inspDate,"inspectionType",inspType);
} else {
  logDebug("ERROR: Could not get CapId : " + myResult.getErrorType() + " : " + myResult.getErrorMessage() );
}
