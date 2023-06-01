from django import forms
from django.contrib.auth import get_user_model, authenticate

user = get_user_model()

class LoginForms(forms.Form):
	username = forms.CharField(max_length=100)
	password = forms.CharField(max_length=100)

	def clean(self):
		username = self.cleaned_data.get('name',)
		password = self.cleaned_data.get('password',)
		if username and password:
			user = authenticate(username=username, password=password)
			if not user or not user.check_password(password):
				raise forms.ValidationError('login or password do not match!')
			return super().clean()



class RgistrationForms(forms.ModelForm):

	class Meta:
		model = user
		fields = '__all__'

	name = forms.CharField(max_length=100)
	password = forms.CharField(max_length=100)
	confirmPassword = forms.CharField(max_length=100)

	def clean_password2(self):
		if self.cleaned_data['password'] == self.cleaned_data['confirmPassword']:
			return self.cleaned_data['confirmPassword']
		raise forms.ValidationError('Passwords do not match!')