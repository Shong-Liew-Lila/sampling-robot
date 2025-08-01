from com.inductiveautomation.ignition.common.alarming import AlarmListener
class MyAlarmListener(AlarmListener):
	def __init__(self):
		system.util.getLogger("MyAlarmListener").info("Constructing Object")
		
	def onAcknowledge(self,evt):
		return
		
	def onActive(self,evt):
		alarm_reason = str(evt.getDisplayPath())
		alarm_severity = str(evt.getPriority())
		alarm_label = str(evt.getName())
		equipment = "dev system in Cube"
		alarm_id = str(evt.getId())
#		notification.slack.webhookInvoke(alarm_reason, alarm_severity, alarm_label, equipment, alarm_id)
		payload = {"event": evt}
		scope = "G"
		remoteServers = ["lilahq_ign_dev00"]
		project = "global_script"
		messageHandler = "alarmQueue"
		system.util.sendMessage(project = project, messageHandler = messageHandler, scope = scope, remoteServers = remoteServers, payload = payload)
		
	def onClear(self,evt):
		return
		