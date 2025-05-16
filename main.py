from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Matakuliah

def main():
    # Pyramid configuration
    config = Configurator()

    # Database configuration
    engine = create_engine('sqlite:///matakuliah.db')
    Base.metadata.bind = engine
    DBSession = sessionmaker(bind=engine)
    config.registry['DBSession'] = DBSession()

    # Add routes and views
    config.include('routes')
    config.scan('views')

    # Create WSGI app
    app = config.make_wsgi_app()

    return app

if __name__ == "__main__":
    from wsgiref.simple_server import make_server
    server = make_server("0.0.0.0", 6543, main())
    print("Server is running at http://localhost:6543")
    server.serve_forever()
