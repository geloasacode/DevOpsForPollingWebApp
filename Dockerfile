FROM python:3.11.5-alpine

RUN apk update && apk add py3-pip

RUN mkdir -p /home/app

COPY ./requirements.txt /home/app

RUN pip install --no-cache-dir --verbose -r /home/app/requirements.txt

COPY ./app /home/app

EXPOSE 8080

WORKDIR /home/app

CMD ["python", "main.py"]