FROM python:3.10-slim-buster

RUN mkdir wd
WORKDIR wd
COPY requirements.txt .
COPY server.py .
COPY 2022_Lasse_data.feather .
COPY raw_data/TV2/fv2022.json .
RUN pip3 install -r requirements.txt