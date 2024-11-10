# Dockerfile for Django service

FROM python:3.10

WORKDIR ./

COPY . .

RUN pip install -r requirements.txt

EXPOSE $DJANGO_PORT

CMD ["python", "./app/manage.py", "runserver", "0.0.0.0:${DJANGO_PORT}"]