import time
import sys
import csv
import os
import json
import datetime

from uber_rides.session import Session
from uber_rides.client import UberRidesClient

#stating Point
point_imd = [-5.8323, -35.2054]

#Selected points - 35 points of Natal/Rio Grande do Norte/Brazil
points_neighborhood = [["Pitimbu",[-5.876271, -35.224500]],["Planalto",[-5.858102, -35.251586]],["Ponta Negra",[-5.877522, -35.176073]],["Neópolis",[-5.870513, -35.208176]],["Capim Macio",[-5.862753, -35.195597]],["Lagoa Azul",[-5.734177, -35.253802]],["Pajuçara",[-5.751781, -35.234665]],["Lagoa Seca",[-5.809191, -35.209374]],["Barro Vermelho",[-5.800741, -35.211056]],["Candelária",[-5.841737, -35.210463]],["Praia do Meio",[-5.779198, -35.197163]],["Rocas",[-5.771832, -35.203091]],["Santos Reis",[-5.763226, -35.196786]],["Redinha",[-5.742772, -35.205806]],["Salinas",[-5.763117, -35.247973]],["Igapó",[-5.769009, -35.254755]],["Nossa Senhora da Apresentação",[-5.763654, -35.282543]],["Potengi",[-5.758634, -35.247010]],["Ribeira",[-5.774943, -35.205578]],["Cidade Alta",[-5.785291, -35.206464]],["Alecrim",[-5.796158, -35.216566]],["Nordeste",[-5.796215, -35.245141]],["Quintas",[-5.797290, -35.226006]],["Bom Pastor",[-5.813764, -35.240721]],["Dix-Sept Rosado",[-5.812036, -35.223915]],["Nossa Senhora de Nazaré",[-5.815939, -35.229249]],["Lagoa Nova",[-5.819743, -35.212920]],["Mãe Luiza",[-5.794771, -35.188619 ]],["Nova Descoberta",[-5.824830, -35.200026]],["Tirol",[-5.791699, -35.197358]],["Petrópolis",[-5.782001, -35.195196]],["Areia Preta",[-5.789477, -35.188454]],["Cidade Nova",[-5.834856, -35.242523]],["Cidade da Esperança",[-5.825376, -35.242751]],["Felipe Camarão",[-5.824374, -35.250070]],["Guarapes",[-5.841580, -35.274691]]]


counter = 0

#Field names to csv files
fieldnamesEstimates = ['id', 'timestamp', 'periodOfDay', 'neighborhood', 'start_latitude', 'start_longitude', 'finish_latitude', 'finish_longitude', 'currency_code', 'distance', 'duration','high_estimate', 'low_estimate', 'product_id']
fieldNamesEstimateTime = ['id', 'timestamp', 'periodOfDay', 'neighborhood', 'request_latitude', 'request_longitude', 'wait_time', 'product_id', 'product_name']

#Starts csv files
def startCsvFile(text,csvfile):
	with open(csvfile, 'w') as csvfilewriter:
		writer = csv.DictWriter(csvfilewriter, fieldnames = fieldnamesEstimates)
		writer.writeheader() 

#Main loop for requests
def consumer(seconds,csvFile):
	while True:
		global counter 
		counter = counter + 1
		print('Request '+ str(counter) + ' ', end='')
		print(datetime.datetime.now())
		
		print('Requesting Price Estimatives')
		#Function to request price estimatives from Uber service
		uberRequestTimes(counter, csvFile)

		print('Requesting Wait Time Estimatives')
		#Function to request time estimative from Uber API
		uberExpectedTimes(counter,csvFile)

		time.sleep(seconds)	


def printConsoleLog(counter)
	requestTimeStamp = datetime.datetime.now()
	print('Request '+str(counter)+ ' ', end='')
	print(' Timestamp: ',end='')
	print(requestTimeStamp)
	
	

#initialize Uber application
def uberApiInitialize(session, client):
	session = Session(server_token='ZtSVybSe5Ma41cDP49hWRHL_qmS11nugdEr16Por')
	client = UberRidesClient(session)

#Check the period of the day			
def checktPeriodOfDay(datetime):
	if requestTimeStamp.hour < 12:
		periodOfDay = 'morning'
	elif 12 <= requestTimeStamp.hour < 18:
		periodOfDay = 'afternoon'
	else:
		periodOfDay = 'evening'

#Does the request and writes in a CSV file
def uberRequestTimes(counter, csvfile):
	#Private application access key
	uberApiInitialize(session, client)

	internalCounter = 1
	
	try:

		#iterate throgh all choosen detination points
		for rows in points_neighborhood:
			pontoA = rows[1][0]
			pontoB = rows[1][1]
			
			#Uber run price estimatives
			response = client.get_price_estimates(start_latitude = point_imd[0], start_longitude = point_imd[1], end_latitude = pontoA, end_longitude = pontoB, seat_count=2)
			
			printConsoleLog(internalCounter)
			periodOfDay = checktPeriodOfDay(requestTimeStamp)

			#iterate by the response of values
			for returnLine in response.json.get('prices'):
				with open(csvfile, 'a') as csvfilewriter2:
					writer = csv.DictWriter(csvfilewriter2, fieldnames=fieldnamesEstimates)
					writer.writerow({'id':str(counter)+str(internalCounter), 'timestamp':requestTimeStamp, 'periodOfDay': periodOfDay, 'neighborhood':rows[0], 'start_latitude':point_imd[0], 'start_longitude':point_imd[1], 'finish_latitude':rows[1][0], 'finish_longitude':rows[1][1], 'currency_code': returnLine['currency_code'], 'distance':returnLine['distance'],'duration':returnLine['duration'],'high_estimate':returnLine['high_estimate'],'low_estimate':returnLine['low_estimate'],'product_id':returnLine['product_id']})

			#ppdate counters
			internalCounter = internalCounter + 1
	except:
		print("Price Exception " + datetime.datetime.now())
		pass

#Does the request and writes in a CSV file
def uberExpectedTimes(counter, csvfile):
	currentPath = os.getcwd()
	csvFile = currentPath + '/uberData/uberWaitTimesRidesRequests.csv'
	#Private application access key
	uberApiInitialize(session, client)

	internalCounter = 1
	
	try:

		#iterate throgh all choosen detination points
		for rows in points_neighborhood:
			pointLatitude  = rows[1][0]
			pointLongitude = rows[1][1]
			
			#Uber run wait time estimatives
			response = client.get_products(pointLatitude,pointLongitude)

			printConsoleLog(internalCounter)
			periodOfDay = checktPeriodOfDay(requestTimeStamp)

			#iterate by the response of values
			for returnLine in response.json.get('products'):
				#Request wait time for a certain Uber's product
				client.get_pickup_time_estimates(pointLatitude,pointLongitude, returnLine['product_id'])

				with open(csvfile, 'a') as csvfilewriter2:
					writer = csv.DictWriter(csvfilewriter2, fieldnames=fieldnamesEstimates)
					writer.writerow({'id':str(counter)+str(internalCounter), 'timestamp':requestTimeStamp, 'periodOfDay': periodOfDay, 'neighborhood':rows[0], 'duration':returnLine['duration'],'product_id':returnLine['product_id']})
					writer.writerow({'id':str(counter)+str(internalCounter), 'timestamp':requestTimeStamp, 'periodOfDay': periodOfDay, 'neighborhood':rows[0], 'request_latitude':pointLatitude, 'request_longitude':pointLongitude, 'wait_time':wait_time, 'product_id':product_id, 'product_name':product_name})

			#ppdate counters
			internalCounter = internalCounter + 1
	except:
		print("Wait Time Exception " + datetime.datetime.now())
		pass

def main():
	
	#Current file path for csv file
	currentPath = os.getcwd()
	csvFile = currentPath + '/uberData/uberRidesRequests.csv'
	executionCounter = 0
	fileExists = os.path.exists(csvFile)
	if not fileExists:
		startCsvFile('', csvFile)
	
	#Start UberRIdes configuration
	#main loop, it executes every x seconds
	#35 requests for prices starting from IMD
	#35 requests for wait time
	#35 requests for product, one requisition for every point
	#2000 request per hour, so, 2000/95 = 22 times of global requests
	#60 minutes / 22 requests for limit -> 3 minutes and 26 seconds (4 minutes or 240 seconds)
	consumer(240,csvFile)
	#while true:
#		time.sleep(90)
#		executionCounter = executionCounter+1
			

if __name__ == "__main__":
	main()
	
