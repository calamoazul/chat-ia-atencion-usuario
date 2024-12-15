#!/bin/bash

set -e 
echo -e "Script funcionando"

host="$POSTGRES_HOST"
port=5432
until nc -z "$host" "$port"; do
    echo -e "Esperando conexión en $host:$port"
    sleep 1
done

echo "Conexión iniciada correctamente"

python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000


exec "$@"