FROM python:3.11.4-slim-buster 

WORKDIR /app

COPY requirements.txt ./ 
RUN apt-get update && apt-get install -y netcat && apt-get clean
RUN pip3 install --no-cache-dir -r requirements.txt 

COPY . .
EXPOSE 8000





