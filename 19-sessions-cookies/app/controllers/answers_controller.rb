class AnswersController < ApplicationController

    def new
        @user = User.new
        @instructor = Instructor.all.sample
        @answer = Answer.new
        @options = Cookie.options(@instructor.cookie)
    end
    
    def create
        question = Question.create({instructor_id: params[:answer][:instructor_id]})
        answer = Answer.create(answer_params)
        answer.question = question
        if answer.valid? && answer.user.valid?
            answer.save
            flash[:notice] = answer.correct ? 'Well done!' : 'Wrong!'
            redirect_to new_answer_path
        else
            flash[:errors] = answer.errors.full_messages + answer.user.errors.full_messages
            redirect_to new_answer_path
        end
    end

    private

    def answer_params
        params.require(:answer).permit(:cookie_id, :user_id, :user_name)
    end
end
