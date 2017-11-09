import time
import sys
import csv
import os
import json
import datetime

from uber_rides.session import Session
from uber_rides.client import UberRidesClient

point_imd = [-5.8323, -35.2054]
points_neighborhood = [["Pitimbu",[-5.876271, -35.224500]],["Planalto",[-5.858102, -35.251586]],["Ponta Negra",[-5.877522, -35.176073]],["Neópolis",[-5.870513, -35.208176]],["Capim Macio",[-5.862753, -35.195597]],["Lagoa Azul",[-5.734177, -35.253802]],["Pajuçara",[-5.751781, -35.234665]],["Lagoa Seca",[-5.809191, -35.209374]],["Barro Vermelho",[-5.800741, -35.211056]],["Candelária",[-5.841737, -35.210463]],["Praia do Meio",[-5.779198, -35.197163]],["Rocas",[-5.771832, -35.203091]],["Santos Reis",[-5.763226, -35.196786]],["Redinha",[-5.742772, -35.205806]],["Salinas",[-5.763117, -35.247973]],["Igapó",[-5.769009, -35.254755]],["Nossa Senhora da Apresentação",[-5.763654, -35.282543]],["Potengi",[-5.758634, -35.247010]],["Ribeira",[-5.774943, -35.205578]],["Cidade Alta",[-5.785291, -35.206464]],["Alecrim",[-5.796158, -35.216566]],["Nordeste",[-5.796215, -35.245141]],["Quintas",[-5.797290, -35.226006]],["Bom Pastor",[-5.813764, -35.240721]],["Dix-Sept Rosado",[-5.812036, -35.223915]],["Nossa Senhora de Nazaré",[-5.815939, -35.229249]],["Lagoa Nova",[-5.819743, -35.212920]],["Mãe Luiza",[-5.794771, -35.188619 ]],["Nova Descoberta",[-5.824830, -35.200026]],["Tirol",[-5.791699, -35.197358]],["Petrópolis",[-5.782001, -35.195196]],["Areia Preta",[-5.789477, -35.188454]],["Cidade Nova",[-5.834856, -35.242523]],["Cidade da Esperança",[-5.825376, -35.242751]],["Felipe Camarão",[-5.824374, -35.250070]],["Guarapes",[-5.841580, -35.274691]]]

counter = 0
fieldnamesEstimates = ['id', 'timestamp', 'periodOfDay', 'neighborhood', 'start_latitude', 'start_longitude', 'finish_latitude', 'finish_longitude', 'currency_code', 'distance', 'duration','high_estimate', 'low_estimate', 'product_id']

def startCsvFile(text,csvfile):
	with open(csvfile, 'w') as csvfilewriter:
		writer = csv.DictWriter(csvfilewriter, fieldnames = fieldnamesEstimates)
		writer.writeheader() 

def consumer(seconds,csvFile):
	while True:
		global counter 
		counter = counter + 1
		print('Request '+ str(counter), end='')
		print(datetime.datetime.now())
		uberRequestTimes(counter, csvFile)
		uberExpectedTimes(counter,csvFile)
		time.sleep(seconds)	
			
#def periodOfDay(datetime):
def uberRequestTimes(counter, csvfile):
	
	session = Session(server_token='ZtSVybSe5Ma41cDP49hWRHL_qmS11nugdEr16Por')
	client = UberRidesClient(session)
	internalCounter = 1
	#iterate throgh all choosen detination points
	try:
		for rows in points_neighborhood:
			pontoA = rows[1][0]
			pontoB = rows[1][1]
			response = client.get_price_estimates(start_latitude = point_imd[0], start_longitude = point_imd[1], end_latitude = pontoA, end_longitude = pontoB, seat_count=2)
			requestTimeStamp = datetime.datetime.now()
			print('Request '+str(internalCounter)+ ' ', end='')
			print(' Timestamp: ',end='')
			print(requestTimeStamp)
			if requestTimeStamp.hour < 12:
				periodOfDay = 'morning'
			elif 12 <= requestTimeStamp.hour < 18:
				periodOfDay = 'afternoon'
			else:
				periodOfDay = 'evening'

			#periodOfDay = checkPeriod(requestTImeStamp)
			for returnLine in response.json.get('prices'):
				with open(csvfile, 'a') as csvfilewriter2:
					writer = csv.DictWriter(csvfilewriter2, fieldnames=fieldnamesEstimates)
					writer.writerow({'id':counter, 'timestamp':requestTimeStamp, 'periodOfDay': periodOfDay, 'neighborhood':rows[0], 'start_latitude':point_imd[0], 'start_longitude':point_imd[1], 'finish_latitude':rows[1][0], 'finish_longitude':rows[1][1], 'currency_code': returnLine['currency_code'], 'distance':returnLine['distance'],'duration':returnLine['duration'],'high_estimate':returnLine['high_estimate'],'low_estimate':returnLine['low_estimate'],'product_id':returnLine['product_id']})
			internalCounter = internalCounter + 1
	except:
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
	consumer(90,csvFile)
	#while true:
#		time.sleep(90)
#		executionCounter = executionCounter+1
			

if __name__ == "__main__":
	main()
	
