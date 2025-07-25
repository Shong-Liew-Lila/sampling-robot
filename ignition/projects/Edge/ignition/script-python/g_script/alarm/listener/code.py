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
		system.util.getLogger("MyAlarmListener").info("%s"%alarm_reason)
		notification.slack.webhookInvoke(alarm_reason, alarm_severity, alarm_label, equipment, alarm_id)
		
	def onClear(self,evt):
		return
		