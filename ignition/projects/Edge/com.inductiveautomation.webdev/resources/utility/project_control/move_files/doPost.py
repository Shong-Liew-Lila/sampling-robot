def doPost(request, session):
	project = request['postData']['project']
	dstFolder = request['postData']['dstFolder']
	res = utility.ignition.gateway_control
	return {'response': res}