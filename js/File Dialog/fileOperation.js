const fs = require('fs');

module.exports = {
    get_db_Sync: function(path) {
        let rawdata = fs.readFileSync(path, (err, data) => {
            if (err)
            {
                console.log("error read in get_db()");
                return err;
            }
            let db = JSON.parse(rawdata);

            console.log(db);

            return db
        });

        return null
    },

    append_to_db: function() {
        console.log('etc')
        return
    },

    rewrite_whole_db: function(json_object) {
        console.log('etc')

        let data = JSON.stringify(json_object);

        fs.writeFileSync(db_path_and_filename, data);

        return true
    },
};

