const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateGoalInput = require('../../validation/goals');
const Goal = require('../../models/Goal')
const { ObjectID } = require('mongodb');

router.get('/', (req, res) => {
    Goal.find()
        .sort({ date: -1 })
        .then(goals => res.json(goals))
        .catch(err => res.status(404).json({ nogoalsfound: 'No goals found' }));
});

router.get('/users/:userId', (req, res) => {
    Goal.find({author: req.params.userId})
        .sort({date: -1 })
        .then(goals => res.json(goals))
        .catch(err =>
            res.status(404).json({ nogoalsfound: 'No goals found from that user' }
        )
    );
});

router.get('/:goalId', (req, res) => {
    Goal.findById(req.params.goalId)
        .then(goal => res.json(goal))
        .catch(err =>
            res.status(404).json({ nogoalfound: 'No goal found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { isValid, errors } = validateGoalInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newGoal = new Goal({
          category: req.body.category,
          title: req.body.title,
          description: req.body.description,
          date: req.body.date,
          author: req.user.id
      });
  
      newGoal.save()
        .then(goal => res.json(goal));
    }
  );

  router.patch('/:goalId', 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateGoalInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const update = {
            title: req.body.title,
            description: req.body.description,
        }

        Goal.findByIdAndUpdate(
            req.params.goalId,
            update,
            {new: true},
            (err, goal) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.json(goal);
               }   
            }
        );
    }
  );

  router.delete('/:goalId', (req, res) => {
    //   Goal.deleteOne({_id: req.params.goalId},
    //     error => {
    //         if (error) {
    //             return error
    //         }
    //     });

    //     res.redirect('/api/goals');

        passport.authenticate("jwt", { session: false }),
        async (req, res) => {
            await db.collection("goals").deleteOne({ _id: ObjectID(req.params.id) });
            res.json("deleted");
        }
        
        res.redirect('/api/goals');
  })


module.exports = router;