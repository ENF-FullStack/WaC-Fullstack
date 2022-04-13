module.exports = mongoose => {
      var schema = mongoose.Schema (
            {
            name: String,
            account: String,
            league: String,
            level: Number,
            class: String,
            ascendancy: String,
            items : [
                  {type: mongoose.Schema.Types.ObjectId,ref:'Items'}
            ]
            },
            { timestamps: true }
      );

      schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
          });
        
      const Character = mongoose.model("character", schema);
      return Character;
};