from flask import Flask, render_template, flash, request, redirect, url_for
import smtplib
import urllib.request
import uuid as uuid
import os

#create a flask instance
app = Flask(__name__)

#Website Links
@app.route("/calendly-form")
def calendly():
		return render_template("calendly_form.html")

@app.route("/about-devtegrate")
def about():
		return render_template("about.html")

@app.route("/contact-us")
def contact():
		return render_template("contact.html")

@app.route("/make-that-great-leap-in-your-career-path")
def career():
		return render_template("career.html")

@app.route("/explore-our-world")
def explore():
		return render_template("explore.html")

@app.route("/frequently-asked-questions")
def faq():
		return render_template("faq.html")

@app.route("/get-in-touch")
def get_in_touch():
		return render_template("get-in-touch.html")

@app.route("/explore-our-services")
def services():
		return render_template("services.html")

@app.route("/devtegrate-help-center")
def help_center():
		return render_template("help_center.html")

@app.route("/devtegrate-privacy-policy")
def privacy_policy():
		return render_template("privacy.html")

@app.route("/inspiration")
def inspiration():
		return render_template("inspiration.html")

@app.route("/amazon-web-service")
def aws():
		return render_template("aws.html")

@app.route("/microsoft-azure")
def azure():
		return render_template("azure.html")

@app.route("/google-cloud-platform")
def gcp():
		return render_template("gcp.html")

@app.route("/integration", methods=['GET', 'POST'])
def integration():

	#name = request.form.get("name")
	#company = request.form.get("company")
	#email = request.form.get("email")
	#message = request.form.get("message")

	#server = smtplib.SMTP("smtp.office365.com", 587)
	#server.starttls()
	#server.login('contact@devtegrate.com', 'Welcome2022@@eva')
	#server.sendmail("michael@devtegrate.com", name, company, email, message)

	return render_template("integration.html")

@app.route("/devtegrate-team-page")
def team():
		return render_template("team.html")

#create a route decorator
@app.route("/")
def index():
	return render_template("index.html")

#create custom error page
@app.errorhandler(404)
def page_not_found(e):
	return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
	return render_template("500.html"), 500


if __name__ == "__main__":
    app.run(debug=True)