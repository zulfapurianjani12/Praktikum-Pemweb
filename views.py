from pyramid.view import view_config
from pyramid.response import Response
from models import Matakuliah
from sqlalchemy.exc import DBAPIError

@view_config(route_name='list_matakuliah', renderer='json')
def list_matakuliah(request):
    session = request.registry['DBSession']
    try:
        matakuliah = session.query(Matakuliah).all()
        return {'matakuliah': [m.nama_mk for m in matakuliah]}
    except DBAPIError:
        return Response('Database error', status=500)

@view_config(route_name='add_matakuliah', request_method='POST', renderer='json')
def add_matakuliah(request):
    session = request.registry['DBSession']
    try:
        data = request.json_body
        new_matakuliah = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=data['sks'],
            semester=data['semester']
        )
        session.add(new_matakuliah)
        session.commit()
        return {'success': True, 'message': 'Matakuliah added'}
    except DBAPIError:
        return Response('Database error', status=500)

@view_config(route_name='edit_matakuliah', request_method='PUT', renderer='json')
def edit_matakuliah(request):
    session = request.registry['DBSession']
    matakuliah_id = int(request.matchdict['id'])
    data = request.json_body
    try:
        matakuliah = session.query(Matakuliah).filter_by(id=matakuliah_id).one()
        matakuliah.kode_mk = data['kode_mk']
        matakuliah.nama_mk = data['nama_mk']
        matakuliah.sks = data['sks']
        matakuliah.semester = data['semester']
        session.commit()
        return {'success': True, 'message': 'Matakuliah updated'}
    except DBAPIError:
        return Response('Database error', status=500)

@view_config(route_name='delete_matakuliah', request_method='DELETE', renderer='json')
def delete_matakuliah(request):
    session = request.registry['DBSession']
    matakuliah_id = int(request.matchdict['id'])
    try:
        matakuliah = session.query(Matakuliah).filter_by(id=matakuliah_id).one()
        session.delete(matakuliah)
        session.commit()
        return {'success': True, 'message': 'Matakuliah deleted'}
    except DBAPIError:
        return Response('Database error', status=500)
