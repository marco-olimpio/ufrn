<h1>About the dataset</h1>
<p>The data presented is derived from reported crimes classified according to Maryland criminal code and documented by approved police incident reports. The data about crimes do not put info about the victins and its masks the actual address not putting the exact place where the complaint occured.</p>

<br/>

Source: <a href="https://data.world/jboutros/montgomery-county-crime" target="blank"> https://data.world/jboutros/montgomery-county-crime </a>
<p>
	<strong>Maryland County Area</strong>
	</p>
<br/>

<img src="https://www.montgomerycountymd.gov/POL/Resources/Images/districts/Countywidemap.jpg">

<h2><strong>Checking about data available</strong></h2>


<ul>
	<li><strong>Incident ID</strong>: Looks like a simple table identification number</li>
	<li><strong>CR Number</strong>: CR stands for Complaint Register and its a identification for a Compleint Process for a full disciplinary investigation</li>
	<li><strong>Dispatch Date/Time</strong>: Looks the date and time when the complaint was made</li>
	<li><strong>Class</strong></li>
		<ul>
			<li><strong>Class number</strong>:Identification number of the complaint</li>
			<li><strong>Class description</strong>:Description of the class</li>
		</ul>
	<li><strong>Complaint</strong></li>
		<ul>
			<li><strong>Public place</strong></li>
				<ul>
					<li><strong>Police District Name</strong>: Auto describes it</li>
					<li><strong>Police District Number</strong>: Auto describes it</li>
					<li><strong>Block address</strong>: Auto describes it</li>
					<li><strong>City</strong>: Auto describes it</li>
					<li><strong>State</strong>: Auto describes it</li>
					<li><strong>Zip Code</strong>: Auto descrives it</li>
					<li><strong>Agency</strong>: Agency responsable for this address</li>
					<li><strong>Place</strong>: Kind of place where the crime occured</li>
					<li><strong>Sector</strong></li>
					<ul>
						<li>Rockville District: Sectors A, B, C</li>
						<li>Bethesda District: Sectors D, E</li>
						<li>Silver Spring District: Sector G</li>
						<li>Wheaton-Glenmont District: Sector J, K</li>
						<li>Germantown District: Sectors M, N, P</li>
					</ul>
					<li><strong>Address Number</strong>: Auto describes it</li>
					<li><strong>Beat</strong>: Beat is the territory and time that a police officer patrols</li>
					<li><strong>PRA</strong>: Police Reporting Area</li>
					<li><strong>Latitude</strong>: Auto describes it</li>
					<li><strong>Longitude</strong>: Auto describes it</li>
					<li><strong>Location</strong>: Tuple of Latitude and Longitude</li>
				</ul>
			<li>Complaint estimative</li>
				<ul>
					<li><strong>Start Data/Time</strong>: Start of the complaint</li>
					<li><strong>End Date/Time</strong>: End of the complaint</li>
				</ul>
		</ul>
</ul>

<h2>Dataset questions</h2>
<ul>
	<li><strong>About Type of complaint</strong></li>
		<ul>
			<li>Which complaint is most common?</li>
			<li>What are the categories of complaints?</li>
			<li>Could we categorize the types of crimes in violent or not?</li>
		</ul>
	<li><strong>About Period of time/day of the week</strong></li>
		<ul>
			<li>Wich period of the day that most complaints occur</li>
			<li>Wich day of the week that most complaints occur</li>
			<li>Wich month of the years that most complaints occur </li>
			<li>These complainsts are realted with holidays?</li>
			<li>What period of time (time of day/day of the week/month of the year) has correlation with the type of complaint</li>
		</ul>
	<li><strong>About Location</strong></li>
		<ul>
			<li>Where is most of the complaints?</li>
			<li>What sort of places have most complaints</li>
			<li>What sort of place has correlation with the type of complaint</li>
		</ul>
	<li><strong>Correlation between locale and type of complaint</strong></li>
		<ul>
			<li>Is there a correlations between the day of the week and kind of complaint?</li>
		</ul>
</ul>

<h4>References</h4>
<ul>
	<li>https://www.montgomerycountymd.gov/pol/districts/whatsmydistrict.html</li>
	<li>http://www.ericcarlson.net/scanner/police.html</li>

</ul>