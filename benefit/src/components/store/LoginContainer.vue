<template>
    <div id="modalLogin" class="modal">
        <div class="modal-content">
            <!-- Form Module-->
            <div class="module form-module">
                <div class="toggle">
                    <i class="fa fa-times fa-pencil"></i>
                    <!-- <div class="LoginTip" id="LoginTip">Create an account</div> -->
                </div>
                <!-- Log in form -->
                <div class="form">
                    <h2>Sign in to your account</h2>
                    <form method="post" action="/Member/Login" id="formsignin" role="form" class="form-horizontal">
                        <input type="email" id="SignInEmail" name="SignInEmail" placeholder="Email" required="required" />
                        <input type="password" id="SignInPassword" name="SignInPassword" placeholder="Password" required="required" />
                        <button type="submit" id="btnSignIn">Sign in</button>
                        <div id="signinerrortext" style="color:crimson;text-align: center;margin-top:20px;"></div>
                    </form>
                </div>
                <!-- //Log in form -->
                <!-- Register form -->
                <div class="form">
                    <h2>Create an account</h2>
                    <form method="post" action="/Member/SignUp" id="formsignup" role="form" class="form-horizontal">
                        <input type="email" id="SignUpEmail" name="SignUpEmail" placeholder="Email Address" required="required" />
                        <input type="password" id="SignUpPassword" name="SignUpPassword" placeholder="Password" required="required" />
                        <input type="password" id="SignUpPasswordConfirm" name="SignUpPasswordConfirm" placeholder="Confirm Password" required="required" />
                        <button type="submit" id="btnSignUp">Create an account</button>
                        <div id="signuperrortext" style="color:crimson;text-align: center;"></div>
                    </form>
                </div>
                <!-- //Register form -->

                <div class="cta"><a href="#" onclick="alert('not yet!');">Forgot your password?</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginContainer',
        data() {
            return {
                name: 'LoginContainer'
            }
        }

    }
</script>

<style lang="scss"></style>