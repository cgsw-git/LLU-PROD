showDebug = true; 
showMessage = true; 
var inspDate =  inspObj.getInspectionDate().getMonth() + "/" + inspObj.getInspectionDate().getDayOfMonth() + "/" + inspObj.getInspectionDate().getYear();
var inspType = inspObj.getInspectionType();
logDebug("Inspection Date= " + inspDate);

//generate and attach the 5001 Inspection Report to the inspected record
var myResult = aa.cap.getCap(inspObj.getCapID());
if (myResult.getSuccess()){
  var cap = myResult.getOutput();
  var capId = cap.getCapID();
  var customID = capId.getCustomID();
  var reportParams = aa.util.newHashtable();
  addParameter(reportParams,"departmentID",customID);
  addParameter(reportParams, "inspectionDate",inspDate);
  addParameter(reportParams, "inspectionType",inspType);
  runReportAttach(capId,"5001 Inspection Report",reportParams;
} else {
  logDebug("ERROR: Could not get CapId : " + myResult.getErrorType() + " : " + myResult.getErrorMessage() );
}
// End generate and attach the 5001 Inspection Report to the inspected record

