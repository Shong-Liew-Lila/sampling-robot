def doGet(request, session):
#	return {'html': "hello-world"}
	
#	ds = request['params']['ds']
#	startDateMillis = request['params']['startDateMillis']
#	endDateMillis = request['params']['endDateMillis']

	startDate = system.date.addDays(system.date.now(), -16)
	endDate = system.date.addDays(system.date.now(), -15)
#	startDate = system.date.fromMillis(startDateMillis)
#	endDate = system.date.fromMillis(endDateMillis)
	paths = ["histprov:db_timescale:/drv:ignition-opto-06-07-30:edge:/tag:opto22/devices/_local_io_/optommp/modules/channels/weight/value"]
	columnNames = []
	ds = system.tag.queryTagHistory(paths=paths, startDate=startDate, endDate=endDate, aggregationMode='Average', columnNames=columnNames,ignoreBadQuality=True)
#
#
	columns = ds.getColumnNames()
	result = []
	
	for row in range(ds.getRowCount()):
	    row_obj = {}
	    for col in columns:
	        row_obj[col] = ds.getValueAt(row, col)
	    result.append(row_obj)
#	return {'html': result}
	render = charting.plotlyJs.render(str(result))
	return {'html': render}