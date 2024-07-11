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
  pgm.createTable('documents', {
    id: 'id',
    candidate_id: {
      type: 'integer',
      notNull: true,
      references: '"candidates"',
      onDelete: 'cascade',
    },
    file_name: { type: 'varchar(255)', notNull: true },
    file_type: { type: 'varchar(50)', notNull: true },
    content: { type: 'bytea', notNull: true },
    upload_date: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = pgm => {
  pgm.dropTable('documents');
};
