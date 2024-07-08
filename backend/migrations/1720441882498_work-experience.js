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
  pgm.createTable('work_experience', {
    id: 'id',
    candidate_id: {
      type: 'integer',
      notNull: true,
      references: '"candidates"',
      onDelete: 'cascade',
    },
    company: { type: 'varchar(255)', notNull: true },
    position: { type: 'varchar(255)', notNull: true },
    start_date: { type: 'date', notNull: true },
    end_date: { type: 'date' },
    description: { type: 'text' },
  });
};

exports.down = pgm => {
  pgm.dropTable('work_experience');
};
