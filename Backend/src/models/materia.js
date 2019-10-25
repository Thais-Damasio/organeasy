module.exports = (sequelize, DataTypes) => {
    const Materia = sequelize.define('Materia', 
    // Atributos
    {
      id_curso: DataTypes.INTEGER,
      nome: DataTypes.STRING(255),
      criado_em: DataTypes.DATE,
      atualizado_em: DataTypes.DATE
    },
    // Configurações
    {
      hooks: {
        beforeCreate: (data, options) => {
          data.criado_em = new Date();
          data.atualizado_em = new Date();
        },
        beforeUpdate: (data, options) => {
          data.atualizado_em = new Date();
        }
      },
      timestamps: false,
      freezeTableName: false,
      tableName: 'Materia',
    });
  
    //Associações
    Materia.associate = function(models) {
      Materia.belongsTo(models.Curso, {as: 'curso', targetKey: 'id', foreignKey: 'id_curso'});
      Materia.hasMany(models.AtividadeMateria, {as: 'atividadesMaterias', targetKey: 'id', foreignKey: 'id_materia'});
    }; 

    return Materia;
  }