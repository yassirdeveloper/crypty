# Dockerfile for Django service

FROM python:3.10

WORKDIR ./

COPY ./app .

RUN pip install -r requirements.txt

EXPOSE $DJANGO_PORT

CMD ["python", "manage.py", "runserver", "0.0.0.0:${DJANGO_PORT}"]