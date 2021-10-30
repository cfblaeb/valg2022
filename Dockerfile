FROM python:3.9-slim-buster

RUN mkdir wd
WORKDIR wd
COPY requirements.txt .
COPY server.py .
COPY kv2021_Lasse_data.feather .
RUN pip3 install -r requirements.txt