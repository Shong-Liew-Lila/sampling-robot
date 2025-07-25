def render(data):	
	return """
	<!DOCTYPE html>
	<html>
	<head>
	    <script src="https://cdn.plot.ly/plotly-2.30.0.min.js"></script>
	</head>
	<body>
	    <div id="plot" style="width: 100%; height: 600px;"></div>
	    <script>
	        // In Perspective, you can inject JSON here
	        // For example:
	        const dataset = """ + data + """;
			
	        const timestamps = dataset.map(row => row.timestamp);
	        const columnKeys = Object.keys(dataset[0]).filter(k => k !== "timestamp");
	
	        const traces = columnKeys.map(key => {
	            return {
	                x: timestamps,
	                y: dataset.map(row => row[key]),
	                mode: 'lines',
	                type: 'scatter',
	                name: key
	            };
	        });
	
	        const layout = {
	            title: 'Ignition Dataset with Dynamic Pens',
	            xaxis: { title: 'Timestamp' },
	            yaxis: { title: 'Value' }
	        };
	
	        Plotly.newPlot('plot', traces, layout);
	    </script>
	</body>
	</html>
	"""