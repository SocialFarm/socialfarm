function(doc) {
    if (doc.type == "person" ) {
        emit( doc._id, doc )
    }
}

