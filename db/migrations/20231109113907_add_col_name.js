/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.table('exam_questions', (table)=>{
        table.string('cloudinary_id').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.table('exam_questions', (table)=>{
        table.dropColumn('cloudinary_id');
      });
};
