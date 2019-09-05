class AnswersController < ApplicationController

    def new
        @user = session[:user_id] ? User.find(session[:user_id]) : nil
        @instructor = Instructor.all.sample
        @answer = Answer.new
        @options = Cookie.options(@instructor.cookie)
        session[:score] = session[:score] || 0
        # session[:score] ||= 0
    end
    
    def create
        question = Question.create({instructor_id: params[:answer][:instructor_id]})
        answer = Answer.create(answer_params)
        answer.question = question
        if answer.valid? && answer.user.valid?
            answer.save
            flash[:notice] = answer.correct ? 'Well done!' : 'Wrong!'
            if session[:user_id] != answer.user.id
                session[:score] = answer.correct ? 1 : 0
                session[:user_id] = answer.user.id
            else
                session[:score] += answer.correct ? 1 : 0
            end
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
