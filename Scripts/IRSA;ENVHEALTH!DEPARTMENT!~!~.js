showDebug = true; 
showMessage = true; 
var inspDate =  inspObj.getInspectionDate().getMonth() + "/" + inspObj.getInspectionDate().getDayOfMonth() + "/" + inspObj.getInspectionDate().getYear();
var inspType = inspObj.getInspectionType();
var capId = inspObj.getCapId();
logDebug("Inspection Date= " + inspDate);

//generate and attach the 5001 Inspection Report to the inspected record
runReportAttach(capId,"5001 Inspection Report","departmentID",capId.getCustomID(),"inspectionDate",inspDate,"inspectionType",inspType);

