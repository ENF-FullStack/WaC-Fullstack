module.exports = mongoose => {
    var schema = mongoose.Schema (
                {
                name: String,
                baseItem: String,
                iLvl: Number,
                slot: String,
                unique: Boolean,
                ignored: Boolean,
                charId : {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Characters'}
                },
                { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
    const Item = mongoose.model("item", schema);
    return Item;
};