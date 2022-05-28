module.exports = {
  post: (req, res) => {
    res.status(200).send({message : '로그인 성공'});
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    $name: 'Jhon Doe',
                    $age: 29,
                    about: ''
                }
        } */
  },
};
