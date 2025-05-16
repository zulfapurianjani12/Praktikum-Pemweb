from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Matakuliah(Base):
    __tablename__ = 'matakuliah'

    id = Column(Integer, primary_key=True)
    kode_mk = Column(String(10))
    nama_mk = Column(String(100))
    sks = Column(Integer)
    semester = Column(String(20))

    def __repr__(self):
        return f"<Matakuliah(kode_mk={self.kode_mk}, nama_mk={self.nama_mk})>"
