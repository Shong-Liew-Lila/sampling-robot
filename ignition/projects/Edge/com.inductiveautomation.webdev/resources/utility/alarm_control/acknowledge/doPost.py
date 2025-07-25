def doPost(request, session):
	params = request['params']
	system.alarm.acknowledge(alarmIds = [params['alarmIds']], notes = params['notes'], user = params['user'])