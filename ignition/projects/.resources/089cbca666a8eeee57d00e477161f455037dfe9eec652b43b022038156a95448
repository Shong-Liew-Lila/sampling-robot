slack_url = "https://hooks.slack.com/triggers/"
key = "E08QUJJ6MQR/9224312039575/b4ac981754000bdfcb36edf27660147a"
url = slack_url + key

def webhookInvoke(alarm_reason, alarm_severity, alarm_label, equipment, alarm_id):
	'''
	when called, send notification to slack channel defined in the url.
	
    Args:
	    alarm_reason (str): 
	    	add a reason for visibility on why alarm occur.
	    	
	    alarm_severity (str): 
	    	alarm severity level. Match ignition severity level
	    	
	    alarm_label (str): 
	    	alarm label. Get from ignition alarm.
	    
	    equipment (str): 
	    	equipment id to identify where this alarm comes from
	    
	    alarm_id (str): 
	    	uid of alarm that is created by ignition alarm itself.
	    	
	'''
	client = system.net.httpClient()
	headers = {
	"Content-Type" : "application/json"
	}
	
	data = {
			"alarm_reason": alarm_reason,
			"alarm_severity": alarm_severity,
			"alarm_label": alarm_label,
			"equipment": equipment,
			"alarm_id": alarm_id
		}
		
	client.post(url = url, headers = headers, data = data)

