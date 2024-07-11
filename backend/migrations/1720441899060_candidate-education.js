/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = pgm => {
  pgm.createTable('education', {
    id: 'id',
    candidate_id: {
      type: 'integer',
      notNull: true,
      references: '"candidates"',
      onDelete: 'cascade',
    },
    institution: { type: 'varchar(255)', notNull: true },
    degree: { type: 'varchar(255)', notNull: true },
    start_date: { type: 'date', notNull: true },
    end_date: { type: 'date' },
  });
};

exports.down = pgm => {
  pgm.dropTable('education');
};
