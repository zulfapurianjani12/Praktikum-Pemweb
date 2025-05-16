def includeme(config):
    config.add_route('list_matakuliah', '/matakuliah')
    config.add_route('add_matakuliah', '/matakuliah/add')
    config.add_route('edit_matakuliah', '/matakuliah/{id}/edit')
    config.add_route('delete_matakuliah', '/matakuliah/{id}/delete')
